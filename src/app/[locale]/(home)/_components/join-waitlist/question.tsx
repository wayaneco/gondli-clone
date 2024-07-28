'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { SurveyQuestion } from '@/types/api';

export interface JoinWaitlistQuestionProps {
  data: SurveyQuestion;
  singleSelect?: boolean;
  value?: string | string[];
  onChange: (value: JoinWaitlistQuestionProps['value']) => void;
}

export default function JoinWaitlistQuestion({
  data,
  value,
  singleSelect,
  onChange,
}: JoinWaitlistQuestionProps) {
  const { key, content, options } = data;

  const changeHandler = (checked: boolean, v: string) => {
    if (singleSelect) {
      onChange(checked ? v : undefined);
      return;
    }

    if (!Array.isArray(value)) {
      onChange([v]);
      return;
    }

    if (!checked) {
      onChange(value.filter((item) => item !== v));
      return;
    }

    onChange([...value, v]);
  };

  return (
    <div className='w-full rounded-1.5lg border border-border-primary text-sm sm:text-base'>
      <div className='rounded-t-1.5lg bg-border-primary p-5'>
        <p>{content}</p>
      </div>
      <div className='flex flex-col gap-4 p-5'>
        {options.map((option) => (
          <label
            className='flex cursor-pointer items-center gap-3'
            htmlFor={option}
            key={option}
          >
            <Checkbox
              name={key}
              id={option}
              checked={value?.includes(option)}
              onCheckedChange={(checked: boolean) =>
                changeHandler(checked, option)
              }
            />
            <p>{option}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
