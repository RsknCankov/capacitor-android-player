package com.rskn.plugins.capacitor.android.player;

import static androidx.media3.common.MediaLibraryInfo.TAG;

import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.OptIn;
import androidx.media3.common.C;
import androidx.media3.common.PlaybackException;
import androidx.media3.common.Player;
import androidx.media3.common.TrackSelectionParameters;
import androidx.media3.common.Tracks;
import androidx.media3.common.text.CueGroup;
import androidx.media3.common.util.UnstableApi;
import androidx.media3.exoplayer.ExoPlaybackException;
import androidx.media3.ui.SubtitleView;

import java.util.HashMap;
import java.util.Map;

@UnstableApi public class ExoPlayerListener implements Player.Listener {

    private final SubtitleView subtitleView;

    public @OptIn(markerClass = UnstableApi.class) ExoPlayerListener(SubtitleView subtitleView) {
        this.subtitleView = subtitleView;
    }

    @Override
    public void onEvents(@NonNull Player player, @NonNull Player.Events events) {
        Player.Listener.super.onEvents(player, events);
        Map<String, Object> info = new HashMap<>(1);
        info.put("player_events", events);
        PlayerEventsDispatcher.defaultCenter().postNotification("player_events", info);
    }

    @Override
    public void onPlaybackStateChanged(int playbackState) {
        Player.Listener.super.onPlaybackStateChanged(playbackState);

        switch (playbackState) {
            case Player.STATE_IDLE ->
                    PlayerEventsDispatcher.defaultCenter().postNotification(PlayerEventTypes.IDLE.name(), null);
            case Player.STATE_READY ->
                    PlayerEventsDispatcher.defaultCenter().postNotification(PlayerEventTypes.READY.name(), null);
            case Player.STATE_BUFFERING ->
                    PlayerEventsDispatcher.defaultCenter().postNotification(PlayerEventTypes.BUFFERING.name(), null);
            case Player.STATE_ENDED ->
                    PlayerEventsDispatcher.defaultCenter().postNotification(PlayerEventTypes.END.name(), null);
        }
    }

    @Override
    public void onIsPlayingChanged(boolean isPlaying) {
        Player.Listener.super.onIsPlayingChanged(isPlaying);
        HashMap<String, Object> info = new HashMap(1);
        info.put(PlayerEventTypes.IS_PLAYING.name(), isPlaying);
        PlayerEventsDispatcher.defaultCenter().postNotification(
                PlayerEventTypes.IS_PLAYING.name(),info
        );
    }

    @Override
    public void onTracksChanged(Tracks tracks) {
        Player.Listener.super.onTracksChanged(tracks);
        Player.Listener.super.onTracksChanged(tracks);

        for (int i = 0; i < tracks.getGroups().size(); i++) {
            Tracks.Group trackGroup = tracks.getGroups().get(i);
            if (trackGroup.getType() == C.TRACK_TYPE_TEXT) {
                for (int j = 0; j < trackGroup.length; j++) {
                    if (trackGroup.isTrackSupported(j) && trackGroup.isTrackSelected(j)) {
                        Log.d(TAG, "Subtitle track selected: " + trackGroup.getTrackFormat(j).language);
                    }
                }
            }
        }
    }

    @Override
    public void onCues(CueGroup cueGroup) {
        Player.Listener.super.onCues(cueGroup);
        subtitleView.setCues(cueGroup.cues);
    }

    @Override
    public void onTrackSelectionParametersChanged(TrackSelectionParameters parameters) {
        Player.Listener.super.onTrackSelectionParametersChanged(parameters);
    }

    @Override
    public void onPlayerError(@NonNull PlaybackException error) {
        ExoPlaybackException parsedError = (ExoPlaybackException) error;
        Player.Listener.super.onPlayerError(error);
        @Nullable Throwable cause = error.getCause();
        HashMap<String, Object> info = new HashMap(1);
        info.put("error", cause);
        PlayerEventsDispatcher.defaultCenter().postNotification(PlayerEventTypes.ERROR.name(), info);
//        if (cause instanceof HttpDataSource.HttpDataSourceException) {
//            // An HTTP error occurred.
//            HttpDataSource.HttpDataSourceException httpError = (HttpDataSource.HttpDataSourceException) cause;
//            // It's possible to find out more about the error both by casting and by querying
//            // the cause.
//            if (httpError instanceof HttpDataSource.InvalidResponseCodeException) {
//                // Cast to InvalidResponseCodeException and retrieve the response code, message
//                // and headers.
//            } else {
//                // Try calling httpError.getCause() to retrieve the underlying cause, although
//                // note that it may be null.
//            }
//        }
    }
}
