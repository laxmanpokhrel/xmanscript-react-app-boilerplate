import { useDispatch } from 'react-redux';
import { initDomToCode } from 'dom-to-code';
import { templateActions } from '@/store/actions/templateAction';
import appRoutes from './routes/appRoutes';
import sandboxRoutes from './routes/sandboxRoutes';
import generateRoutes from './routes/_lib/generateRoutes';
import './assets/css/tailwind.css';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      <div className="m-auto h-fit bg-white">
        <div className="App flex">
          <div className="left background-animate h-screen w-[25vw] bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500" />
          {process.env.NODE_ENV !== 'production'
            ? generateRoutes({ routes: [...sandboxRoutes, ...appRoutes] })
            : generateRoutes({ routes: appRoutes })}
        </div>
      </div>
    </>
  );
}
