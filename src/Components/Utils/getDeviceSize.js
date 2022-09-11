export default getDeviceSize(width){
    /**
     * X-Small	None	<576px
        Small	sm	≥576px
        Medium	md	≥768px
        Large	lg	≥992px
        Extra large	xl	≥1200px
        Extra extra large	xxl	≥1400px
     */
    if(width > 1400){
        return "xxl";
    }else if(width > 1200){
        return "xl";
    }else if(width > 992){
        return "lg";
    }else if(width > 768){
        return "md";
    }else if(width > 576){
        return "sm";
    }
    return "xs";
}