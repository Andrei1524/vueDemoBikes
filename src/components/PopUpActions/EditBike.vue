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
            <el-checkbox v-model="status_info.available" @change="check('available')">Available</el-checkbox>
            <el-checkbox v-model="status_info.occupied" @change="check('occupied')">Occupied</el-checkbox>
            <el-checkbox v-model="status_info.under_maintenance" @change="check('under_maintenance')">Under Maintenance</el-checkbox>
        </div>

        <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="Edit">Save</el-button>
        </span>
    </div>
</template>


<script>
export default {
    data() {
        return {
            id: undefined,
            status: '',
            status_info: {
                available: '',
                occupied: '',
                under_maintenance: ''
            },
            serial_no: '',
            docking_station: '',
            franchise_id: ''
        }
    },
    created() {
        const bike = this.getSelectedBike
        this.id = bike.id
        this.status = bike.status
        this.status_info.available = bike.status_info.available
        this.status_info.occupied = bike.status_info.occupied
        this.status_info.under_maintenance = bike.status_info.under_maintenance

        this.serial_no = bike.serial_no
        this.docking_station = bike.docking_station
        this.franchise_id = bike.franchise_id
        
    },
    computed: {
        getSelectedBike() {
            return this.$store.getters.getSelectedBike
        }
    },
    methods: {
        Edit() {
            this.computeStatus()
            this.$store.dispatch('editBike', this._data)
        },
        computeStatus() {
            if (this.status_info.available) this.status = 'Available'
            if (this.status_info.occupied) this.status = 'Occupied'
            if (this.status_info.under_maintenance) this.status = 'Under maintenance'
        },
        check(data) {
            this.status_info.available = false
            this.status_info.occupied = false
            this.status_info.under_maintenance = false
            this.status_info[data] = true
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


</style>