import sensor from '@system.sensor';
import router from '@system.router';

export default {
    data: {
        isGoodPosture: true,
        accelZ: 0
    },
    onInit() {
        // 姿勢判定のための加速度センサー購読
        sensor.subscribeAccelerometer({
            interval: 'normal',
            success: (ret) => {
                this.accelZ = ret.z;

                // ロジック例：腕が水平（Z軸が重力加速度付近）かどうかを判定
                // 実際にはデモ用に少しの傾きで反応するように調整します
                if (this.accelZ > 8.0 && this.accelZ < 11.0) {
                    this.isGoodPosture = true;
                } else {
                    this.isGoodPosture = false;
                }
            }
        });
    },
    goBack() {
        // メイン画面に戻る
        router.replace({
            uri: 'pages/index/index'
        });
    },
    onDestroy() {
        // 画面を離れる際は必ず購読解除
        sensor.unsubscribeAccelerometer();
    }
}