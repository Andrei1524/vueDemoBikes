<template>
    <div>
        <div class="title-x">
            <h2>Edit bike</h2>
            <span @click="closePopUp">X</span>
        </div>
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
                <el-button type="primary" @click="popUpVisible = false">Save</el-button>
        </span>
    </div>
</template>


<script>
export default {
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
    created() {
        this.serial_no = this.getSelectedBike.serial_no
        this.docking_station = this.getSelectedBike.docking_station
        this.franchise_id = this.getSelectedBike.franchise_id

        this.options.available  = this.getSelectedBike.status_info.available
        this.options.occupied  = this.getSelectedBike.status_info.occupied
        this.options.under_maintenance  = this.getSelectedBike.status_info.under_maintenance
    },
    computed: {
        getSelectedBike() {
            return this.$store.getters.getSelectedBike
        }
    },
    methods: {
        check(data) {
            this.options.available = false
            this.options.occupied = false
            this.options.under_maintenance = false
            this.options[data] = true
        },
        closePopUp() {
            this.$store.dispatch('showPopUp', {show: false})
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

.title-x {
    display: flex;
    justify-content: space-between;

    h2 {
        text-align: center;
        width: 100%;
    }
}
</style>