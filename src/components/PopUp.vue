<template>
    <div>
        <el-dialog
            :title="info.pop_name"
            :visible.sync="popUpVisible"
            destroy-on-close
            width="fit-content">

            <!-- content -->

            <!-- ADD BIKE POP UP -->
            <AddBike v-if="actionName == 'add'" :info="info" />

            <!-- EDIT BIKE POP UP -->
            <EditBike v-if="actionName == 'edit'" :selected_bike="selected_bike" :info="info" />

            <!-- DELETE POP UP -->
            <DeleteBike v-if="actionName == 'delete'" :info="info" />

            
        </el-dialog>
    </div>
</template>

<style lang="scss">

</style>

<script>
import { bus } from '../main'
import AddBike from './PopUpActions/AddBike'
import EditBike from './PopUpActions/EditBike'
import DeleteBike from './PopUpActions/DeleteBike'

export default {
    components: {
        AddBike,
        EditBike,
        DeleteBike
    },
    data() {
        return {
            popUpVisible: false,
            actionName: '',
            info: {},
            selected_bike: {}
        }
    },
    created() {
        bus.$on('show_popup', (data, selected_bike) => {
            this.popUpVisible = data.show
            this.actionName = data.name
            this.info = data.info

            this.selected_bike = selected_bike
        })
    }
}
</script>