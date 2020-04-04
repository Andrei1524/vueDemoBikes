<template>
    <div>
        <div class="title-x">
            <h2>Add bike</h2>
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
                <el-button type="primary" @click="Add">Add</el-button>
        </span>
    </div>
</template>


<script>
export default {
    data() {
        return {
            status: '',
            status_info: {
                available: false,
                occupied: false,
                under_maintenance: false
            },
            serial_no: '',
            docking_station: '',
            franchise_id: ''
        }
    },
    methods: {
        Add() {
            this.computeStatus()
            this.$store.dispatch('addBike', this._data)

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

.title-x {
    display: flex;
    justify-content: space-between;

    h2 {
        text-align: center;
        width: 100%;
    }
}
</style>