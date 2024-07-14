'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';

export default function JoinWaitlist() {
  const t = useTranslations();

  return (
    <form className='w-86.25 sm:w-150'>
      <Input
        type='email'
        required
        placeholder={t('join-waitlist-placeholder')}
        submitButton={t('join-waitlist')}
        className='pr-36 sm:pr-44'
        autoComplete='off'
      />
    </form>
  );
}
