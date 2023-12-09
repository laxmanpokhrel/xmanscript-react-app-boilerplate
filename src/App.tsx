import { useDispatch } from 'react-redux';
import { FormProvider } from '@xmanscript/useform';
import { initDomToCode } from 'dom-to-code';
import { templateActions } from '@/store/actions/templateAction';
import 'react-day-picker/dist/style.css';
import './assets/css/tailwind.css';
import appRoutes from './routes/appRoutes';
import sandboxRoutes from './routes/sandboxRoutes';
import generateRoutes from './routes/_lib/generateRoutes';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      <FormProvider>
        <div className="naxatw-m-auto naxatw-bg-white naxatw-h-fit">
          <div className="App naxatw-flex">
            <div className="left naxatw-w-[25vw] naxatw-h-screen naxatw-bg-gradient-to-r naxatw-from-pink-500 naxatw-via-blue-500 naxatw-to-yellow-500 background-animate" />
            {process.env.NODE_ENV !== 'production'
              ? generateRoutes({ routes: [...sandboxRoutes, ...appRoutes] })
              : generateRoutes({ routes: appRoutes })}
          </div>
        </div>
      </FormProvider>
    </>
  );
}
