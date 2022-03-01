import Dashboard from '../components/admin/Dashboard';
import Map from'../components/admin/Map';
import Poubelles from '../components/admin/Poubelles';
import Camions from '../components/admin/Camions';
import Responsables from '../components/admin/Responsables';
import Acheteurs from '../components/admin/Acheteurs';
import Ouvriers from'../components/admin/Ouvriers';
import Reparateurs from'../components/admin/Reparateurs';
// import Login from '../components/Login';

const routes = [
    {path :'/admin', exact: true, name:'Admin' , component: Dashboard },
    {path :'/admin/dashboard', exact: true, name:'Dashboard', component: Dashboard },
    {path :'/admin/map', exact: true, name:'Map', component: Map },
    {path :'/admin/poubelles', exact: true, name:'Poubelles', component: Poubelles },
    {path :'/admin/camions', exact: true, name:'Camions', component: Camions },
    {path :'/admin/ouvriers', exact: true, name:'Ouvriers', component: Ouvriers },
    {path :'/admin/reparateurs', exact: true, name:'Reparateurs', component: Reparateurs },
    {path :'/admin/reponsable-etablissement', exact: true, name:'Responsables', component: Responsables },
    {path :'/admin/achetur-de-dechets', exact: true, name:'Acheteurs', component: Acheteurs },
    // {path :'/login', exact: true, name:'Login' , component: Login },
]

export default routes;
