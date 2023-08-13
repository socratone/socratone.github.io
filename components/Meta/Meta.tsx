import { NextSeo } from 'next-seo';

type MetaProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

const Meta: React.FC<MetaProps> = ({ title, description, imageUrl }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            // TODO: add default image url
            url: imageUrl ?? '',
          },
        ],
      }}
    />
  );
};

export default Meta;
