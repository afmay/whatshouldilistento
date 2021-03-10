const app = new Vue({
    el: '#app',
    data() {
      return {
        client_id: 'b9b1bc33ef1746b0b394e0333f15f036',
        scopes: 'user-top-read',
        redirect_uri: 'http://whatdoilistento.com/',
        me: null
      }
    },
    methods: {
      login() {
        let popup = window.open(`https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`, 'Login with Spotify', 'width=800,height=600')
        
        window.spotifyCallback = (payload) => {
          // alert(payload)
          
          popup.close()
          
          fetch('https://api.spotify.com/v1/me/top', {
            headers: {
              'Authorization': `Bearer ${payload}`
            }
          }).then(response => {
            return response.json()
          }).then(data => {
            this.me = data
          })
        }
      }
    },
    mounted() {
      this.token = window.location.hash.substr(1).split('&')[0].split("=")[1]
      
      if (this.token) {
        // alert(this.token)
        
        window.opener.spotifyCallback(this.token)
        }
    }
})
  