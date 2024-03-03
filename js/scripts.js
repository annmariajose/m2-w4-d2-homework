Vue.component('foodblogheader',{
    template: `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
        <span>Food Blog</span>

            <!-- Hamburger Menu -->
            <button id="nav-collapsed-button" class = "navbar-toggler border-0" type = "button" data-toggle = "collapse" 
                data-target = "#navbarContent" 
                aria-controls = "navbarContent" aria-expanded = "false" 
                aria-label = "Toggle navigation">
                
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse hamburgerMenu" id="navbarContent">
                <ul class="navbar-nav w-100 mt-1 mt-lg-n4 mx-lg-3 d-flex justify-content-end">
                    <li class="nav-item p-3 px-lg-2">
                        <a href="#">Home</a>
                    </li>
                    <li class="nav-item p-3 px-lg-2">
                        <a href="#">Recipes</a>
                    </li>
                    <li class="nav-item p-3 px-lg-2">
                        <a href="#">Lifestyles</a>
                    </li>
                    <li class="nav-item p-3 px-lg-2">
                        <a href="#">Videos</a>
                    </li>
                    <li class="nav-item dropdown p-3 px-lg-2 has-children">
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
            <div id="modalContainer" class="collapse"></div>
        </nav>
    </header>
    `
});
Vue.component('commentsheading',{
    template: '<h2>Comments</h2>'
});

var vm1 = new Vue({
    el: '#container',
    data: {
        chiliImage: "images/chili.jpg",
        reply: "REPLY",
        foodieTitle: "Foodie Level: ",
        bioTitle: "Bio: ",
        post1: {
            profileImage: "profile.png",
            author: "Brianna",
            foodieLevel: "Novice",
            bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
            date: "February 18, 2021 @ 3:30 pm",
            review: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!"
        },
        post2: {
            profileImage: "profile.png",
            author: "LINH",
            foodieLevel: "Newcomer",
            bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
            date: "February 15, 2021 @ 9:46 am",
            review: "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!"
        },
        post3: {
            profileImage: "profile.png",
            author: "CATHERINE LEONARDO",
            foodieLevel: "Mentor",
            bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!",
            date: "February 13, 2021 @ 12:58 pm",
            review: "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure."
        },
        post4: {
            profileImage: "profile.png",
            author: "KALI",
            foodieLevel: "Novice",
            bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
            date: "February 13, 2021 @ 11:31 am",
            review: "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!"
        },
        clickedAuthor: "",
        clickedFoodieLevel: "",
        clickedBio: ""
    },
    methods: {
        showProfile: function(event) {
            var c = event.target.parentNode.className.split(' ')[1];
            this.clickedAuthor = this.$data[c].author;
            this.clickedFoodieLevel = this.$data[c].foodieLevel;
            this.clickedBio = this.$data[c].bio;
            $('.box').css('display', 'block');
        },
        closeProfile: function() {
            $('.box').css('display', 'none');
        }
    }
});