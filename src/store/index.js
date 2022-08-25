import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mockResult: [
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/IEDe8jl5efU?autoplay=1",
          en: "https://www.youtube.com/embed/DogKdiRx7ls?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/y2emL1fMRyY?autoplay=1",
          en: "https://www.youtube.com/embed/D4YTJ2W5q4Y?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/IEDe8jl5efU?autoplay=1",
          en: "https://www.youtube.com/embed/DogKdiRx7ls?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/y2emL1fMRyY?autoplay=1",
          en: "https://www.youtube.com/embed/D4YTJ2W5q4Y?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/IEDe8jl5efU?autoplay=1",
          en: "https://www.youtube.com/embed/DogKdiRx7ls?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/y2emL1fMRyY?autoplay=1",
          en: "https://www.youtube.com/embed/D4YTJ2W5q4Y?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/IEDe8jl5efU?autoplay=1",
          en: "https://www.youtube.com/embed/DogKdiRx7ls?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/y2emL1fMRyY?autoplay=1",
          en: "https://www.youtube.com/embed/D4YTJ2W5q4Y?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/IEDe8jl5efU?autoplay=1",
          en: "https://www.youtube.com/embed/DogKdiRx7ls?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/y2emL1fMRyY?autoplay=1",
          en: "https://www.youtube.com/embed/D4YTJ2W5q4Y?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/IEDe8jl5efU?autoplay=1",
          en: "https://www.youtube.com/embed/DogKdiRx7ls?autoplay=1"
        }
      },
      {
        broadcast: {
          ru: "https://www.youtube.com/embed/y2emL1fMRyY?autoplay=1",
          en: "https://www.youtube.com/embed/D4YTJ2W5q4Y?autoplay=1"
        }
      }
    ],
    currentLink: ''
  },
  getters: {
  },
  mutations: {
    setCurrentLink(state, payload) {
      state.currentLink = payload
    }
  },
  actions: {
    async mockResult({ state }, isMock) {
      if(isMock) {
        const mock = await new Promise((res) =>
          setTimeout(() => res(state.mockResult), 1000)
        );
        return mock;
      }
    },
    async getCurrentLink({ commit }) {
      const casts = await this.dispatch('mockResult', true);
      let currentVideoIndex = 0;
      while (currentVideoIndex < casts.length) {
        console.log(currentVideoIndex)
        const currentCast = casts[currentVideoIndex];
        currentVideoIndex += 1;
        const currentLink = window.navigator.language === 'ru-RU' ? currentCast.broadcast.ru : currentCast.broadcast.en
        console.log(window.navigator.language);
        commit('setCurrentLink', currentLink)
        await new Promise((res) =>
        setTimeout(() => {
          res();
        }, 10000));
      }
    }
  },
  modules: {
  }
})
