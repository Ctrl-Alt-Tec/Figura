let _this;
window.sessionStorage;
class AltBlog{
    static LikeButton (url){
        let likeButton = document.createElement('div');
        likeButton.className = 'fb-like';
        likeButton.setAttribute('data-href', url);
        likeButton.setAttribute('data-width', '');
        likeButton.setAttribute('data-layout', 'button_count');
        likeButton.setAttribute('data-action', 'like');
        likeButton.setAttribute('data-size', 'large');
        likeButton.setAttribute('data-share', 'false');
        return likeButton;
    }
    static CommentSection (url){
        let commentSection = document.createElement('div');
        commentSection.className = 'fb-comments';
        commentSection.setAttribute('data-href', url);
        commentSection.setAttribute('data-numposts', '5');
        commentSection.setAttribute('data-width', '');
        return commentSection;
    }
    static Card (post, options){
        let card = document.createElement('a');
        card.className = 'altBlog card';
        card.href = '?post='+post.slug;
        
        let card_category = document.createElement('span');
        card_category.className = 'card_category';
        card_category.innerHTML = post.category;
        //
        let card_title = document.createElement('h2');
        card_title.className = 'card_title'
        card_title.innerText = post.title;
        //
        let postElement_author = document.createElement('div');
        postElement_author.className = 'card_author';
        postElement_author.innerText = post.author;
        //
        card.append(card_category, card_title, postElement_author)
        card.addEventListener('click', ()=>{ 
            window.history.pushState('',document.title,'')
            _this.openPost(post.slug) 
        })
        return card
    }

    
    
    
    constructor(baseURL, o, env){
        this.environment=env;
        _this = this;
        let options = {
            enableQueries: true,
            initialHTML: '',
            ...o
        };
        if(sessionStorage.getItem('sbaseURL')==null){
            sessionStorage.setItem('sbaseURL',baseURL);
        }
        this.baseURL = sessionStorage.getItem('sbaseURL');
        this.container = document.querySelector('#container')
        this.options = options;
        this.posts = [];
        
        this.container.classList.add('altBlog', 'altBlogContainer')
    }


    
    async fetchPosts (){
        //if(this.environment=='figuraBlog'){
            let posts_raw = await fetch( this.baseURL );
            this.posts = await posts_raw.json();
        //}

        if(this.options.enableQueries){
            let query = new URLSearchParams(window.location.search);
            if (query.get('post')){
                this.openPost(query.get('post'))
            } else {
                this.displayPosts()
            }
        }
    }

    displayPosts (cond = ()=>true){
        this.container.innerHTML = "";
        this.container.innerHTML = this.options.initialHTML || "";
        this.posts.filter(cond).forEach(post=>{
            this.container.append( AltBlog.Card(post) );
        })
        
    }

    async openPost (slug){
        this.container.innerHTML = "";
        let post_raw = await fetch(this.baseURL+'/'+slug);
        let post = await post_raw.text();
        this.container.innerHTML = post;

        let social = document.createElement('section');
        social.className = 'social';
        social.append(
            AltBlog.LikeButton(window.location.href+'?post='+slug),
            AltBlog.CommentSection(window.location.href+'?post='+slug)
        )
        this.container.append(social);
        FB.XFBML.parse(social);
    }

}
