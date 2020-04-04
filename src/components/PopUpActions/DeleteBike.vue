<template>
    <div>
        <div class="title-x">
            <h2>Delete bike</h2>
            <span @click="closePopUp">X</span>
        </div>
        <p>by deletin you will lose all data regarding etc. this is irr process</p>
        <p>are you sure you want to continue</p>

        <span slot="footer" class="dialog-footer">
                <el-button type="danger" @click="Delete">Delete</el-button>
        </span>
    </div>
</template>


<script>
export default {
    methods: {
        Delete() {
            this.$store.dispatch('deleteBike')
        },
        closePopUp() {
            this.$store.dispatch('showPopUp', {show: false})
        }
    }   
}
</script>


<style lang="scss" scoped>

</style>