import ApiFactory from '@/api/ApiFactory';

export default function Querytest() {
  const ProjectsService = ApiFactory.createQuery({ url: '/projects', key: 'get-analytics data' });
  const { isLoading, isSuccess, isError } = ProjectsService.get();
  if (isLoading) return <h5>Loading...</h5>;
  if (isError) return <h5>Error...</h5>;
  if (isSuccess) return <h5>Data Fetched Successfully, Check network tab.</h5>;
  return <></>;
}
