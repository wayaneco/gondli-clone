'use client';

import { useTranslations } from 'next-intl';
import { Input, InputProps } from '@/components/ui/input';

export interface JoinWaitlistProps {
  inputVariant?: InputProps['variant'];
}

export default function JoinWaitlist({ inputVariant }: JoinWaitlistProps) {
  const t = useTranslations();

  return (
    <form className='w-full max-w-150'>
      <Input
        variant={inputVariant}
        type='email'
        required
        placeholder={t('join-waitlist-placeholder')}
        submitButton={t('join-waitlist')}
        className={'pr-36 sm:pr-44'}
        autoComplete='off'
      />
    </form>
  );
}
