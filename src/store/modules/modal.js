const defaultState = {
  visible: false,
  title: '',
  content: ''
}

export default {
  state: defaultState,
  namespaced: true,
  actions: {
    VISIBLE: (context, visible) => {
      context.commit('visible', visible)
    },
    SET_TITLE: (context, title) => {
      context.commit('set_title', title)
    },
    SET_CONTENT: (context, content) => {
      context.commit('set_content', content)
    }
  },
  mutations: {
    visible: (state, visible) => {
      state.visible = visible
    },
    set_title: (state, title) => {
      state.title = title
    },
    set_content: (state, content) => {
      state.content = content
    }
  }
}
