import { Checkbox } from '@/components/ui/checkbox';

export interface JoinWaitlistQuestionProps {
  data: {
    name: string;
    question: string;
    answers: { value: string; label: string }[];
  };
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
  const { name, question, answers } = data;

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
        <p>{question}</p>
      </div>
      <div className='flex flex-col gap-4 p-5'>
        {answers.map(({ value: v, label }) => (
          <label
            className='flex cursor-pointer items-center gap-3'
            htmlFor={v}
            key={v}
          >
            <Checkbox
              name={name}
              id={v}
              checked={value?.includes(v)}
              onCheckedChange={(checked: boolean) => changeHandler(checked, v)}
            />
            <p>{label}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
