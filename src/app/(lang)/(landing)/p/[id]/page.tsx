import ImageInfo from '@/src/components/ui/image-info';

export default function Page({ params }) {
  const { id } = params;

  return <ImageInfo id={id} />;
}
