<template>
    <router-link :to="to" class="item bikes">
        <div>
            <div class="item-icon">
                <img :src="require(`@/assets/menu_items/${imgIconName}`)" alt="icon">
            </div>
            <h5>{{ name }}</h5>
        </div>

        <i v-if="downIcon" class="el-icon-caret-bottom"></i>
    </router-link>
</template>


<script>
export default {
    props: ['to', 'imgIconName', 'name', 'downIcon']
}
</script>

<style lang="scss">
.item {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    text-decoration: none;
    color: #ffffffa1;

    margin-bottom: 40px;
    i {
        font-size: 12px;
    }
    div {
        display: flex;
        align-items: center;
    }
}
.item-icon {
    width: 0px;
    margin-right: 35px;
}

</style>