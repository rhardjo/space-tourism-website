import { FC } from 'react'

type PageHeaderProps = {
  pageIndex: string
  pageTitle: string
  className?: string
}

const PageHeader: FC<PageHeaderProps> = ({
  pageIndex,
  pageTitle,
  className = '',
}: PageHeaderProps) => {
  return (
    <h1
      className={`font-barlow-condensed text-subheading2 uppercase pb-8 ${className}`}
    >
      <span className="text-white text-opacity-25 pr-2">{pageIndex}</span>
      {pageTitle}
    </h1>
  )
}

export default PageHeader
