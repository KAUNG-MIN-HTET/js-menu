//select
let cardMenu = document.getElementById("cardMenu");
let filterBtns = document.querySelectorAll("#filterBtns");

window.addEventListener("load",function() {
    displayInBrowser(menu);
});

filterBtns.forEach(function(btn) {
    btn.addEventListener("click",function(e) {
        //dataset value
        let current = e.currentTarget.dataset.category;

        //filter menu with dataset
        let filterMenu = menu.filter((item) => {
            if(item.category === current) {
                return item;
            }
        });

        //displayInBrowser
        if(current === "all") {
            displayInBrowser(menu);
        }else {
            displayInBrowser(filterMenu);
        }
    });
});

//display function
function displayInBrowser(i) {
    let display = i.map((e) => {
        // console.log(e.title);
        return `
                <div class="col-12 col-lg-6 my-2">
                    <!--card-->
                    <div class="card border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <img src=${e.img} class="img-fluid rounded-3 border border-5 border-warning" style="cursor: pointer;" alt="img-1" />
                                </div>
                                <div class="col-12 col-md-6">
                                    <!--card title-->
                                    <div class="row border-bottom">
                                        <!--name-->
                                        <div class="col-6">
                                            <p class="fw-bold mb-0 py-3">${e.title}</p>
                                        </div>
                                        <div class="col-6">
                                            <p class="fw-bold text-end mb-0 py-3">$ ${e.price}</p>
                                        </div>
                                    </div>
                                    <!--description-->
                                    <div class="row">
                                        <div class="col-12">
                                            <p class="mb-0 py-0 py-md-3">${e.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
    });
    //join the outputs
    let displayMenu = display.join("");
    //display
    cardMenu.innerHTML = displayMenu;
}