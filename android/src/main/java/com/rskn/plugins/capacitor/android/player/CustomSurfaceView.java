package com.rskn.plugins.capacitor.android.player;

import android.content.Context;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

import androidx.annotation.NonNull;

class CustomSurfaceView extends SurfaceView implements SurfaceHolder.Callback {

    private final String TAG = "CustomSurfaceView";

    CustomSurfaceView(Context context) {
        super(context);
    }

    @Override
    public void surfaceCreated(@NonNull SurfaceHolder holder) {}

    @Override
    public void surfaceChanged(@NonNull SurfaceHolder holder, int format, int width, int height) {}

    @Override
    public void surfaceDestroyed(@NonNull SurfaceHolder holder) {}
}
