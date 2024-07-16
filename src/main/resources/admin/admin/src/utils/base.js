const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootol3q1/",
            name: "springbootol3q1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootol3q1/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "秒杀系统"
        } 
    }
}
export default base
