<template>
    <div>
        <div class="title-notif space-between">
            <h2>Bikes</h2>
            <div class="notif">
                <i class="icons el-icon-bell"></i>
            </div>
        </div>

        <div class="space-between add-show">
            <el-button type="primary" @click="popUp({name: 'add', show: true})" round>+ ADD BIKE</el-button>
            <div class="show">
                <h4>Show</h4>

                <div class="show-select">
                    <el-select v-model="filter.show" placeholder="Select"></el-select>
                </div>
            </div>
        </div>

        <!-- /pop-ups-->
        <div id="bikes-show">
            <div class="search">
                <i class="icons el-icon-search"></i>
                <el-input class="search-inp" placeholder="Search" v-model="filter.search"></el-input>
            </div>

            <div class="show-bikes">
                <el-table
                :data="getBikes"
                style="width: 100%;">
                    <el-table-column
                        prop="status"
                        label="Status"
                        width="220">
                        <template slot-scope="scope">
                            <div class="table-td-icon">
                                <i class="blue-circle"></i>
                                <span style="margin-left: 10px">{{ scope.row.status }}</span>
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
                            <el-button @click="popUp({name: 'edit', show: true, index: scope.$index})" type="text" size="small"><i class="icons del-icon el-icon-edit"></i></el-button>
                            <el-button @click="popUp({name: 'delete', show: true, index: scope.$index}, )" type="text" size="small"><i class="icons edit-icon el-icon-delete"></i></el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    components: {
    },
    data() {
        return {
            popUpVisible: false,
            filter: {
                show: 'Available',
                search: ''
            },
            bikes: []
        }
    },
    created() {
        axios.get('https://vue-bikes.firebaseio.com/bikes.json').then(res => {
          const bikesArray = []

          for (const key in res.data) {
            bikesArray.push({ ...res.data[key], id: key})
          }
        
         this.$store.dispatch('loadBikesFromApi', bikesArray)
      })

      
    },
    methods: {
        popUp(data) {
            // let selected_bike = this.bikes[index]
            this.$store.dispatch('showPopUp', data)
        }
    },
    computed: {
        getBikes() {                
            return this.$store.getters.getBikes
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