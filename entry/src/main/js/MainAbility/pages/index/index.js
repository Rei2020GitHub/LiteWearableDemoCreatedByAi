import sensor from '@system.sensor';
import router from '@system.router';

export default {
    data: {
        heartRate: 0,
        accelZ: 0,
        bpmColor: '#ffffff',
        statusMessage: ""
    },
    onInit() {
        // 心拍数モニターの購読
        sensor.subscribeHeartRate({
            success: (ret) => {
                this.heartRate = ret.heartRate;
                this.statusMessage = ""; // 成功したらメッセージを消去
                this.bpmColor = (this.heartRate > 100) ? '#ff0000' : '#ffffff';
            },
            fail: (data, code) => {
                // 602(アクセス拒否)や201(権限なし)をまとめて判定
                if (code === 602 || code === 201 || code === 202) {
                    this.statusMessage = "設定 > 権限マネージャーから「ボディセンサー」を許可してください";
                } else {
                    this.statusMessage = "センサー準備中... (Code: " + code + ")";
                }
                console.log('Heart rate fail, code: ' + code);
            }
        });

        // 加速度センサーの購読
        sensor.subscribeAccelerometer({
            interval: 'normal',
            success: (ret) => {
                this.accelZ = ret.z.toFixed(2);
            }
        });
    },
    goToDetail() {
        router.replace({
            uri: 'pages/detail/detail'
        });
    },
    onDestroy() {
        sensor.unsubscribeHeartRate();
        sensor.unsubscribeAccelerometer();
    }
}