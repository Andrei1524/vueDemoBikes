<template>
    <div>
        <div class="info">
            <div class="serial">
                <h4>Serial no.</h4>
                <el-input v-model="serial_no"></el-input>
            </div>
            <div class="docking">
                <h4>Docking Station</h4>
                <el-input v-model="docking_station"></el-input>
            </div>
            <div class="franchise">
                <h4>Franchise ID</h4>
                <el-input v-model="franchise_id"></el-input>
            </div>
        </div>

        <div class="status">
            <h4>Status</h4>
            <el-checkbox v-model="options.available" @change="check('available')">Available</el-checkbox>
            <el-checkbox v-model="options.occupied" @change="check('occupied')">Occupied</el-checkbox>
            <el-checkbox v-model="options.under_maintenance" @change="check('under_maintenance')">Under Maintenance</el-checkbox>
        </div>

        <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="popUpVisible = false">{{ info.btn_name }}</el-button>
        </span>
    </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {
            serial_no: '',
            docking_station: '',
            franchise_id: '',

            options: {
                available: '',
                occupied: '',
                under_maintenance: ''
            }
            
        }
    },
    methods: {
        check(data) {
            this.options.available = false
            this.options.occupied = false
            this.options.under_maintenance = false

            this.options[data] = true
        }
    }
}
</script>

<style lang="scss" scoped>
h4 {
    margin: 0;
}

.info {
    display: flex;
    justify-content: space-between;

    h4 {
        margin-bottom: 4px;
    }

    > div {
        padding: 0 10px;
    }
}
.status {
    margin-top: 15px;
}
</style>