import OptimizedImage from '@/src/components/images/OptimizedImage';
import cloudinary from '@/src/utils/cloudinary';

export default async function ImageDetailsPage({ params }) {
  const { id } = params;
  const { resources } = await cloudinary.v2.search
    .expression(id)
    .max_results(100)
    .execute();
  const { public_id } = resources[0];

  return (
    <div>
      <OptimizedImage src={public_id} width={720} height={1080} />;
    </div>
  );
}
