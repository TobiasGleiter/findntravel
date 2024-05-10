import cloudinary from '@/src/utils/cloudinary';
import OptimizedImage from '../images/OptimizedImage';

export default async function ImageInfo({ id }) {
  const { resources } = await cloudinary.v2.search
    .expression(id)
    .max_results(100)
    .execute();
  const { public_id } = resources[0];

  return (
    <>
      <OptimizedImage src={public_id} width={420} height={420} />
    </>
  );
}
