'use client';

import { useTranslations } from 'next-intl';
import { useMediaQuery } from 'react-responsive';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryState, parseAsArrayOf, parseAsInteger } from 'nuqs';
import useSWR from 'swr';
import { SectionWrapper, SectionTitle } from '@/components/shared/section';
import { Input } from '@/components/ui/input';
import { Category } from './category';
import { Search } from '@/icons';
import { axios } from '@/lib/axios';
import { cn, handleError } from '@/lib/utils';
import { Categories } from '@/types/api';

export function BlogFilters() {
  const t = useTranslations();

  const isMobile = useMediaQuery({
    maxWidth: '640px',
  });

  const [_, setSearch] = useQueryState('search');
  const [activeCategories, setActiveCategories] = useQueryState(
    'category_ids[]',
    parseAsArrayOf(parseAsInteger),
  );

  const { register, handleSubmit } = useForm();

  const { data: categories } = useSWR('/category', (url) =>
    axios.get<Categories>(url).then((res) => res.data),
  );

  const submitHandler: SubmitHandler<{
    search?: string;
  }> = async ({ search }) => {
    try {
      setSearch(search || '');
    } catch (error: any) {
      handleError(error, t);
    }
  };

  return (
    <SectionWrapper className='flex flex-col items-center gap-15 bg-surface-brand text-white sm:gap-20'>
      <SectionTitle>{t('blog-title')}</SectionTitle>
      <div className='w-200 max-w-full space-y-5'>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            Icon={Search}
            placeholder={t('blog-search-placeholder')}
            autoComplete='off'
            submitButton={{
              className: cn(isMobile && 'size-10'),
              children: isMobile ? (
                <Search className='size-3.625' />
              ) : (
                t('blog-search-button')
              ),
            }}
            {...register('search')}
          />
        </form>
        <div className='flex w-full gap-2 overflow-x-auto sm:flex-wrap'>
          <Category
            isActive={!activeCategories || activeCategories.length < 1}
            onClick={() => setActiveCategories([])}
          >
            {t('all')}
          </Category>
          {categories?.map(({ id, name }) => (
            <Category
              key={id}
              isActive={!!(activeCategories && activeCategories.includes(id))}
              onClick={() => {
                setActiveCategories((activeCategories) => {
                  if (activeCategories?.includes(id)) {
                    return activeCategories.filter((item) => item !== id);
                  }

                  return [...(activeCategories || []), id];
                });
              }}
            >
              {name}
            </Category>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
