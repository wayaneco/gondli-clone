'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Input, InputProps } from '@/components/ui/input';
import JoinWaitlistDialog from './dialog';
import { axios, csrf } from '@/lib/axios';

export interface JoinWaitlistProps {
  inputVariant?: InputProps['variant'];
}

export default function JoinWaitlist({ inputVariant }: JoinWaitlistProps) {
  const t = useTranslations();

  const { register, reset, handleSubmit } = useForm();

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const submitHandler: SubmitHandler<{
    email?: string;
  }> = async ({ email }) => {
    try {
      await csrf();

      await axios.post('/subscribe', { email });

      setDialogOpen(true);
      reset();
    } catch (error: any) {
      toast(error.response.data.message);
    }
  };

  return (
    <>
      <JoinWaitlistDialog open={dialogOpen} setOpen={setDialogOpen} />
      <form onSubmit={handleSubmit(submitHandler)} className='w-full max-w-150'>
        <Input
          variant={inputVariant}
          type='text'
          placeholder={t('join-waitlist-placeholder')}
          submitButton={t('join-waitlist')}
          className='pr-52 sm:pr-64'
          autoComplete='off'
          {...register('email', { required: true })}
        />
      </form>
    </>
  );
}
