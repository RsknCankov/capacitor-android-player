import { CapacitorAndroidPlayer } from 'capacitor-android-player';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorAndroidPlayer.echo({ value: inputValue })
}
