<template>
    <div class="content">
        <div class="page-header">
            <a href="https://github.com/IllyasvielEin/SchoolMater" target="_blank">
                <img src="https://github.com/favicon.ico">
            </a>
        </div>
        <slot></slot>
        <div class="page-footer">
        </div>
    </div>
</template>
<style lang="less" scoped>
.content {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-image: -moz-element();
    background-image: url('..//assets/CHUN.JPG');
    opacity: 0.7;
    /* 设置透明度为 0.5 */
}

.page {
    &-header {
        width: 100%;
        height: 50px;
        background: #0e8b9e7c;
        position: fixed;
        left: 0;
        top: 0;
    }

    &-footer {
        width: 100%;
        height: 50px;
        background: #0e8b9e7c;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    &-header:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }

    &-footer:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }

    .page-header:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }

    .page-footer:hover {
        -webkit-animation: footer-animation 0.5s;
        animation: footer-animation 0.5s;
    }
}

img {
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
}
</style>