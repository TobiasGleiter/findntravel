import ImageInfo from '@/src/components/ui/image-info';

export default async function Page({ params }) {
  const { id } = params;
  return <ImageInfo id={id} />;
}
