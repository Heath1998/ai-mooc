import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Course from '@/page/CourseIntroduce'
import Video from '@/page/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/course',
      component: Course
    },
    {
      path: '/video',
      component: Video
    }
  ]
})
