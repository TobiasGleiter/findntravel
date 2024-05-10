import ImageInfo from '@/src/components/ui/image-info';

export default function Page({ params }) {
  const { id } = params;
  // const id = 'dncseo7lnt9vookeqtov';
  return <ImageInfo id={id} />;
}
