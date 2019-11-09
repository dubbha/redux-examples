import React from 'react';
import {
  Route,
  NavLink,
  useLocation,
  useParams,
  useRouteMatch,
  // useHistory,     // actually don't use yet, to be replaced by useNavigate
} from 'react-router-dom';

export const ReactRouterApiHooks = ({ match: { path } }) => (
  <>
    <nav>
      <NavLink exact to={`${path}/`}>Home</NavLink>
      <NavLink to={`${path}/deep-tree/42`}>DeepTree</NavLink>
    </nav>
    <Route exact path={`${path}/`} component={Home} />
    <Route path={`${path}/deep-tree/:answer`} render={DeepTree}/>
  </>
);

const Home = () => <div>Home</div>;

const DeepTree = ({ match }) => (
  <div className="deepTree">
    <div>DeepTree [match.path: {match.path}]</div>
    <Deep />
  </div>
);

const Deep = ({ match }) => (
  <div className="deep">
    <div>Deep [match set? { match ? 'Yes' : 'No'}]</div>
    <Deeper />
  </div>
);

const Deeper = ({ match }) => (
  <div className="deeper">
    <div>Deeper [match set? { match ? 'Yes' : 'No'}]</div>
    <EvenDeeper />
  </div>
);

const EvenDeeper = () => {
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  return (
    <div className="evenDeeper">
      <div>So far from Router [match.path: {match.path}]</div>
      <div>location.pathname: {location.pathname}</div>
      <div>params.answer: {params.answer}</div>
    </div>
  );
};
