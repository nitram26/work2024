import { ref } from "vue"

class PostService {
  private posts 

  constructor(){
    this.posts = ref([])
  }

    getPosts (){
      return this.posts
    }

      async fechAll () {
          try {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json

          } catch (error) {
            console.log(error);
          }

    }
}
export default PostService