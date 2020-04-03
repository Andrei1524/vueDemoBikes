<template>
    <div>
        <div class="title-notif space-between">
            <h2>Bikes</h2>
            <div class="notif">
                <i class="icons el-icon-bell"></i>
            </div>
        </div>

        <div class="space-between add-show">
            <el-button type="primary" @click="popUp({show: true, name: 'add'})" round>+ ADD BIKE</el-button>
            <div class="show">
                <h4>Show</h4>

                <div class="show-select">
                    <el-select v-model="filter.show" placeholder="Select"></el-select>
                </div>
            </div>
        </div>

        <!-- pop-ups -->
            <PopUp />
        

        <!-- /pop-ups-->
        <div id="bikes-show">
            <div class="search">
                <i class="icons el-icon-search"></i>
                <el-input class="search-inp" placeholder="Search" v-model="filter.search"></el-input>
            </div>

            <div class="show-bikes">
                <el-table
                :data="bikes"
                style="width: 100%;">
                    <el-table-column
                        prop="status"
                        label="Status"
                        width="180">
                        <template>
                            <div class="table-td-icon">
                                <i class="blue-circle"></i>
                                <span style="margin-left: 10px">Available</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="serial_no"
                        label="Serial no."
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="docking_station"
                        label="Docking Station"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="franchise_id"
                        label="Franchise ID">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="Actions"
                        width="180">

                        <template slot-scope="scope">
                        <el-button @click="popUp({show: true, name: 'edit'}, scope.$index)" type="text" size="small"><i class="icons del-icon el-icon-edit"></i></el-button>
                        <el-button @click="popUp({show: true, name: 'delete'}, scope.$index)" type="text" size="small"><i class="icons edit-icon el-icon-delete"></i></el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>

import PopUp from '../components/PopUp'
import { bus } from '../main'
export default {
    components: {
        PopUp
    },
    data() {
        return {
            popUpVisible: false,
            filter: {
                show: 'Available',
                search: ''
            },
            bikes: [
                {
                    status: 'Available',
                    status_info: {
                        available: true,
                        occupied: false,
                        under_maintenance: false
                    },
                    serial_no: 'abdc-5252wy',
                    docking_station: 'Docking no. 1',
                    franchise_id: '1262835'
                },
                {
                    status: {
                        available: true,
                        occupied: false,
                        under_maintenance: false
                    },
                    serial_no: 'abdc-522wy',
                    docking_station: 'Docking no. 2',
                    franchise_id: '145835'
                }
            ]
        }
    },
    mounted() {
        
    },
    methods: {
        popUp(data, index) {
            let addInfo = {
                pop_name: 'Add Bike',
                btn_name: 'Add'
            }

            let editInfo = {
                pop_name: 'Edit Bike',
                btn_name: 'Save'
            }

            let deleteInfo = {
                pop_name: 'Delete Bike',
                btn_name: 'Delete'
            }

            if (data.name == 'add') data.info = addInfo
            if (data.name == 'edit') data.info = editInfo
            if (data.name == 'delete') data.info = deleteInfo
            
            let selected_bike = this.bikes[index]

            bus.$emit('show_popup', data, selected_bike)
        }
    }
}
</script>


<style lang="scss">
.show {
    width: 150px;
}
.show > h4 {
    margin: 0;
    margin-bottom: 5px;
}

/* bikes show */
#bikes-show {
    background: #FFF;
    padding: 10px 0;
    margin-top: 20px;
}
.search {   
    width: 200px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    margin-left: 20px;
    margin-bottom: 10px;
}
.search-inp > input {
    border: none;
    border-radius: 0;
}
.search-inp > input::placeholder {
    color: #1f5388;
    font-weight: 600;
}

.show-bikes .el-table th, .el-table tr {
    background-color: #E6E9EE;
    color: #333B76 !important;
    padding: 14px 10px;
    font-size: 13px !important;
    font-weight: 600 !important;
}

    

.show-bikes .el-table th, .el-table tr td {
    padding: 13px 10px;
    font-size: 16px;
    font-weight: 500;
    color: #2f2f2f;
}

/* icons custom */ 
.table-td-icon {
    display: flex;
    align-items: center;
}
.blue-circle {
    display: block;
    height: 12px;
    width: 12px;
    background: #304FEE;
    border-radius: 50%;
}

.del-icon {
    background: #FE3644;
}
.edit-icon {
    background: #2563F0;
}

.del-icon, .edit-icon {
    padding: 10px;
    color: #FFF;
    font-size: 18px;
    border-radius: 8px;
}
</style>