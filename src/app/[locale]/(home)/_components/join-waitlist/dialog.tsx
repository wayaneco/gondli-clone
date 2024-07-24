import { useState, useMemo, Dispatch, SetStateAction } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import {
  Dialog,
  DialogContent,
  DialogMain,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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

  const steps = {
    welcome: {
      title: t('join-waitlist-welcome-title'),
      description: t('join-waitlist-welcome-description'),
      cancel: t('do-it-later'),
      submit: t('next-step'),
      questions: [
        {
          name: 'user_type',
          question:
            'Are you a Wellness Enthusiast looking for wellness services or a business owner offering wellness services to users?',
          answers: [
            {
              value: 'enthusiast',
              label: 'Wellness Enthusiast',
            },
            {
              value: 'business',
              label: 'Business Owner',
            },
          ],
        },
      ],
    },
    enthusiast: {
      title: undefined,
      description: undefined,
      cancel: t('discard'),
      submit: t('finish'),
      questions: [
        {
          name: 'wellness_interest',
          question:
            'Which types of wellness services are you most interested in? (Select all that apply)',
          answers: [
            {
              value: 'yoga',
              label: 'Yoga',
            },
            {
              value: 'spa',
              label: 'Spa',
            },
            {
              value: 'pilates',
              label: 'Pilates',
            },
            {
              value: 'massage',
              label: 'Massage',
            },
            {
              value: 'other',
              label: 'Other (please specify)',
            },
          ],
        },
        {
          name: 'booking_challenges',
          question:
            'What are the biggest challenges you face when booking wellness services? (Select all that apply)',
          answers: [
            {
              value: 'finding_appointments',
              label: 'Finding available appointments',
            },
            {
              value: 'comparing_prices',
              label: 'Comparing prices',
            },
            {
              value: 'reliable_reviews',
              label: 'Reading reliable reviews',
            },
            {
              value: 'discovering_services',
              label: 'Discovering new services',
            },
            {
              value: 'booking_process',
              label: 'Booking and payment process',
            },
            {
              value: 'other',
              label: 'Other (please specify)',
            },
          ],
        },
        {
          name: 'current_booking_method',
          question: 'How do you currently find and book wellness services?',
          answers: [
            {
              value: 'online_search',
              label: 'Online search',
            },
            {
              value: 'recommendations',
              label: 'Recommendations from friends/family',
            },
            {
              value: 'social_media',
              label: 'Social media',
            },
            {
              value: 'wellness_apps',
              label: 'Dedicated wellness apps',
            },
            {
              value: 'other',
              label: 'Other (please specify)',
            },
          ],
        },
        {
          name: 'platform_improvements',
          question:
            'What would make you more likely to use our platform over your current method? (Select up to 3)',
          answers: [
            {
              value: 'easier_booking',
              label: 'Easier booking process',
            },
            {
              value: 'more_options',
              label: 'More service options',
            },
            {
              value: 'better_deals',
              label: 'Better deals and discounts',
            },
            {
              value: 'personalized_recommendations',
              label: 'Personalized recommendations',
            },
            {
              value: 'enhanced_experience',
              label: 'Enhanced user experience (e.g., design, usability)',
            },
            {
              value: 'social_features',
              label: 'Social features (e.g., reviews, community interaction)',
            },
          ],
        },
        {
          name: 'beta_test_interest',
          question:
            'Would you be interested in participating in a beta test for our platform?',
          answers: [
            {
              value: 'yes',
              label: 'Yes',
            },
            {
              value: 'no',
              label: 'No',
            },
            {
              value: 'maybe',
              label: 'Maybe',
            },
          ],
        },
      ],
    },
    business: {
      title: undefined,
      description: undefined,
      cancel: t('discard'),
      submit: t('finish'),
      questions: [
        {
          name: 'services_offered',
          question:
            'What types of wellness services do you offer? (Select all that apply)',
          answers: [
            {
              value: 'yoga',
              label: 'Yoga',
            },
            {
              value: 'spa',
              label: 'Spa',
            },
            {
              value: 'pilates',
              label: 'Pilates',
            },
            {
              value: 'massage',
              label: 'Massage',
            },
            {
              value: 'other',
              label: 'Other (please specify)',
            },
          ],
        },
        {
          name: 'business_challenges',
          question:
            'What are the biggest challenges you face in attracting and retaining customers? (Select all that apply)',
          answers: [
            {
              value: 'visibility',
              label: 'Increasing visibility and reach',
            },
            {
              value: 'booking_management',
              label: 'Managing bookings and schedules',
            },
            {
              value: 'competition',
              label: 'Competing with other businesses',
            },
            {
              value: 'customer_retention',
              label: 'Customer Retention',
            },
            {
              value: 'reviews',
              label: 'Handling customer reviews and feedback',
            },
            {
              value: 'arrival',
              label: 'Ensuring that the customer arrives after the booking',
            },
            {
              value: 'pricing',
              label: 'Offering competitive pricing',
            },
            {
              value: 'other',
              label: 'Other (please specify)',
            },
          ],
        },
        {
          name: 'feature_needs',
          question:
            'What features would help you manage your business more effectively? (Select up to 3)',
          answers: [
            {
              value: 'automated_booking',
              label: 'Automated booking and scheduling',
            },
            {
              value: 'crm_tools',
              label: 'Customer relationship management tools',
            },
            {
              value: 'marketing_assistance',
              label: 'Marketing and promotion assistance',
            },
            {
              value: 'analytics',
              label: 'Detailed analytics and reporting',
            },
            {
              value: 'social_media_integration',
              label: 'Integration with social media',
            },
            {
              value: 'other',
              label: 'Other (please specify)',
            },
          ],
        },
        {
          name: 'current_promotion_method',
          question:
            'How do you currently promote your services? (Select all that apply)',
          answers: [
            {
              value: 'social_media',
              label: 'Social media',
            },
            {
              value: 'online_ads',
              label: 'Online ads',
            },
            {
              value: 'word_of_mouth',
              label: 'Word of mouth',
            },
            {
              value: 'partnerships',
              label: 'Partnerships with other businesses',
            },
            {
              value: 'directories',
              label: 'Wellness directories',
            },
            {
              value: 'other',
              label: 'Other (please specify)',
            },
          ],
        },
        {
          name: 'beta_test_interest',
          question:
            'Would you be interested in participating in a beta test for our platform?',
          answers: [
            {
              value: 'yes',
              label: 'Yes',
            },
            {
              value: 'no',
              label: 'No',
            },
            {
              value: 'maybe',
              label: 'Maybe',
            },
          ],
        },
      ],
    },
  };

  const [step, setStep] = useState<(typeof steps)[keyof typeof steps]>(
    steps.welcome,
  );

  const isWelcome = useMemo(() => step?.title || step?.description, [step]);

  const submitHandler: SubmitHandler<{
    user_type?: 'enthusiast' | 'business';
  }> = (data) => {
    if (!data.user_type) return;

    const step = steps[data.user_type];

    setStep(step);
  };

  const openChangeHandler = (open: boolean) => {
    setTimeout(() => {
      reset();
      setStep(steps.welcome);
    }, 200);

    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={openChangeHandler}>
      <DialogContent>
        <form onSubmit={handleSubmit(submitHandler)}>
          <DialogMain className={cn(isWelcome && 'pb-5 sm:pb-4')}>
            <div
              className={cn(
                'space-y-5 pb-8 text-center sm:pb-10 sm:pt-7',
                !isWelcome && 'sr-only',
              )}
            >
              <DialogTitle>{step?.title}</DialogTitle>
              <DialogDescription>{step?.description}</DialogDescription>
            </div>
            <div className='space-y-3'>
              {step?.questions.map((question) => (
                <Controller
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <JoinWaitlistQuestion
                      data={question}
                      singleSelect={!!isWelcome}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                  name={question.name}
                  key={question.name}
                />
              ))}
            </div>
          </DialogMain>
          <DialogFooter className={cn(isWelcome && 'border-none')}>
            <Button
              type='button'
              variant={'outline'}
              size={'sm'}
              onClick={openChangeHandler.bind(null, false)}
            >
              {step?.cancel}
            </Button>
            <Button type='submit' size={'sm'}>
              {step?.submit}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
