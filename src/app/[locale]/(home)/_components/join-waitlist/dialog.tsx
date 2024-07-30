'use client';

import { useState, Dispatch, SetStateAction } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import useSWR from 'swr';
import {
  Dialog,
  DialogContent,
  DialogMain,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn, handleError } from '@/lib/utils';
import { axios, csrf } from '@/lib/axios';
import { SurveyQuestions } from '@/types/api';
import JoinWaitlistQuestion from './question';

interface JoinWaitlistDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function JoinWaitlistDialog({
  open,
  setOpen,
}: JoinWaitlistDialogProps) {
  const t = useTranslations();

  const { control, reset, handleSubmit } = useForm();

  const { data } = useSWR('/survey/questions', (url) =>
    axios.get<SurveyQuestions>(url).then((res) => res.data.data),
  );

  const [step, setStep] =
    useState<SurveyQuestions['data']['sections'][number]>();

  const openChangeHandler = (open: boolean) => {
    setTimeout(() => {
      reset();
      setStep(undefined);
    }, 200);

    setOpen(open);
  };

  const submitHandler: SubmitHandler<{
    q1?: SurveyQuestions['data']['sections'][number];
  }> = async (data) => {
    if (!step && data.q1) {
      setStep(data.q1);
      return;
    }

    try {
      await csrf();

      const response = await axios.post('/survey/answers', data);

      openChangeHandler(false);

      toast(response.data.message);
    } catch (error: any) {
      handleError(error, t);
    }
  };

  return (
    <Dialog open={open} onOpenChange={openChangeHandler}>
      <DialogContent>
        <form onSubmit={handleSubmit(submitHandler)}>
          <DialogMain className={cn(!step && 'pb-5 sm:pb-4')}>
            <div
              className={cn(
                'space-y-5 pb-8 text-center sm:pb-10 sm:pt-7',
                step && 'sr-only',
              )}
            >
              <DialogTitle>{t('join-waitlist-welcome-title')}</DialogTitle>
              <DialogDescription>
                {t('join-waitlist-welcome-description')}
              </DialogDescription>
            </div>
            <div className='space-y-3'>
              {data &&
                (step ? data[step] : data.questions).map((question) => (
                  <Controller
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <JoinWaitlistQuestion
                        data={question}
                        singleSelect={question.type === 'radio'}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                    name={question.key}
                    key={question.key}
                  />
                ))}
            </div>
          </DialogMain>
          <DialogFooter className={cn(!step && 'border-none')}>
            <Button
              type='button'
              variant={'outline'}
              size={'sm'}
              onClick={openChangeHandler.bind(null, false)}
            >
              {!step ? t('do-it-later') : t('discard')}
            </Button>
            <Button type='submit' size={'sm'}>
              {!step ? t('next-step') : t('finish')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
