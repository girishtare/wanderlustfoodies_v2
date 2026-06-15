import * as React from 'react';

export interface ArticleCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Featured image URL. */
  image: string;
  /** Taxonomy tone for the floating badge. */
  category?: 'travel' | 'trek' | 'recipe' | 'story';
  /** Badge text (defaults to the category name). */
  categoryLabel?: string;
  title: string;
  excerpt?: string;
  author?: string;
  date?: string;
  /** e.g. "7 min read". */
  readTime?: string;
  href?: string;
}

/**
 * Blog / travel-story card with photo, floating category badge, serif title and meta row.
 * @startingPoint section="Content" subtitle="Blog story card with photo + meta" viewport="380x420"
 */
export function ArticleCard(props: ArticleCardProps): JSX.Element;
