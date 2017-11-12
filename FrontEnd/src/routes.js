import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import VHostView from './components/views/VHost.vue'
import ListVHostView from './components/views/VHostsList.vue'
import UpstreamsListCreateView from './components/views/UpstreamsListCreate.vue'
import OpenNebulaView from './components/views/OpenNebula.vue'
import OpenNebulaCreateView from './components/views/OpenNebulaCreate.vue'
import ActivityLogView from './components/Pages/ActivityLog/ActivityLog.vue'
import knowledgeRepoView from './components/Pages/knowledgeRepo/knowledgeRepo.vue'
import ActivityLogItemView from './components/Pages/ActivityLog/ActivityLogItem.vue'
import knowledgeRepoItemView from './components/Pages/knowledgeRepo/knowledgeRepoItem.vue'
import RoutesView from './components/Pages/Utils/Routes.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'VHost',
        component: VHostView,
        name: 'VHost',
        meta: {description: 'Here is possible to manage a Virtual Host'}
      }, {
        path: 'VHost/:id',
        component: VHostView,
        name: 'VHost ',
        meta: {description: 'Here is possible to manage a Virtual Host'}
      }, {
        path: 'listVHosts',
        component: ListVHostView,
        name: 'List VHost',
        meta: {description: 'Here is possible to list all Virtual Hosts'}
      }, {
        path: 'upstreams',
        component: UpstreamsListCreateView,
        name: 'List or Create Upstreams',
        meta: {description: 'Here is possible to list or create Upstreams'}
      }, {
        path: 'opennebula',
        component: OpenNebulaView,
        name: 'OpenNebula',
        meta: {description: 'Here is possible to list VMs in opennebula'}
      }, {
        path: 'opennebulaCreate',
        component: OpenNebulaCreateView,
        name: 'OpenNebulaCreate',
        meta: {description: 'Here is possible to Create VMs in opennebula'}
      }, {
        path: 'activitylog',
        component: ActivityLogView,
        name: 'ActivityLogView',
        meta: {description: 'Here is possible to check the ActivityLog'}
      }, {
        path: 'knowledgerepo',
        component: knowledgeRepoView,
        name: 'knowledgeRepoView',
        meta: {description: 'Here is possible to check the knowledge repo'}
      }, {
        path: 'activitylogItem',
        component: ActivityLogItemView,
        name: 'ActivityLogItemView',
        meta: {description: 'Here is possible to check the ActivityLogItem'}
      }, {
        path: 'knowledgerepoItem',
        component: knowledgeRepoItemView,
        name: 'knowledgeRepoItemView',
        meta: {description: 'Here is possible to check the knowledge repo Item'}
      }, {
        path: 'knowledgerepoItem/:id',
        component: knowledgeRepoItemView,
        name: 'knowledgeRepoItemView By Id',
        meta: {description: 'Here is possible to check the knowledge repo Item'}
      }, {
        path: 'routes',
        component: RoutesView,
        name: 'RoutesView',
        meta: {description: 'Here is possible to check the website routes '}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
