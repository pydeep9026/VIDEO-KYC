class Router {
    constructor(){
        this.ROUTES = {
            "/": "/index.html"
        }
        this.DEFAULT_ROUTE = "/404.html"; // default route to use if requested route is not found
        this.#re_route();
        window.onpopstate = this.#re_route.bind(this); // use bind to set the correct "this" value
    }

    addRoute(route, path){
        this.ROUTES[route] = path;
    }

    router_main(event){
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target.href);
        window.history.pushState({}, '', event.target.href);
        this.#re_route();
    }

    async #re_route(){
        const PATH = window.location.pathname;
        const ROUTE = this.ROUTES[PATH] || this.DEFAULT_ROUTE; // use the default route if requested route is not found
        const CONTENT = await fetch(ROUTE).then(data=>data.text());
        this.#re_route_content(CONTENT);
    }

    #re_route_content(CONTENT){
        if(document.getElementById("root")) document.getElementById("root").remove();
        const ROOT = document.createElement("div");
        ROOT.id = "root";
        ROOT.innerHTML = CONTENT;
        document.body.appendChild(ROOT);
    }
}
