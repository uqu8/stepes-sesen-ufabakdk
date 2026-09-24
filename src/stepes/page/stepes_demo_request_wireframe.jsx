import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Briefcase,
  Building,
  Building2,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileCheck2,
  Globe2,
  Mail,
  Stethoscope,
  User,
} from 'lucide-react';

const demoCheckboxes = [
  'AI translation workflow',
  'Human review and QA',
  'Translation memory',
  'Terminology management',
  'Customer portal',
  'API / integrations',
  'Enterprise security',
  'Pricing / rollout planning',
];

const contentTypes = [
  'Documents',
  'Software / UI',
  'Website',
  'Legal',
  'Marketing',
  'Life sciences',
  'Training',
  'Other',
];

const timeframeOptions = [
  'This week',
  'Within 2 weeks',
  'This month',
  'Planning ahead',
];
const demoTimeOptions = ['Morning', 'Afternoon', 'Late afternoon', 'Flexible'];

const trustSignals = [
  'Enterprise translation workflows',
  'AI + professional human review',
  '100+ languages',
  'Translation memory and terminology',
  'Secure project collaboration',
  'Scalable for ongoing global content',
];

const nextSteps = [
  {
    title: 'We review your workflow and demo priorities',
    description:
      'Our team looks at your request so we can prepare a relevant walkthrough.',
  },
  {
    title: 'A Stepes specialist follows up to confirm fit and timing',
    description: 'We align on goals, scope, and the best time for your team.',
  },
  {
    title: 'You receive a focused 30–45 minute walkthrough',
    description:
      'The session is tailored around your workflow, content, and operational priorities.',
  },
  {
    title: 'We recommend next steps if relevant',
    description:
      'That may include a pilot, rollout path, or pricing discussion based on your needs.',
  },
];

const teams = [
  {
    title: 'Localization and Global Content Teams',
    description:
      'Centralize multilingual workflows and scale translation programs across regions and business units.',
    icon: Globe2,
  },
  {
    title: 'Product and Engineering Teams',
    description:
      'Support software releases, digital products, and multilingual user experiences with connected workflows.',
    icon: Code2,
  },
  {
    title: 'Legal and Compliance Teams',
    description:
      'Review secure workflows for contracts, policies, regulatory content, and audit-sensitive documents.',
    icon: FileCheck2,
  },
  {
    title: 'Life Sciences and Clinical Teams',
    description:
      'Support controlled workflows for clinical, regulatory, medical, and patient-facing content.',
    icon: Stethoscope,
  },
  {
    title: 'Marketing and Ecommerce Teams',
    description:
      'Move faster on campaigns, websites, product content, and brand messaging across languages.',
    icon: Briefcase,
  },
  {
    title: 'Procurement and Vendor Management Teams',
    description:
      'Gain visibility, process consistency, and scalable enterprise translation operations.',
    icon: Building2,
  },
];

const initialFormData = {
  workEmail: '',
  name: '',
  company: '',
  jobTitle: '',
  topics: [],
  contentType: [],
  preferredTimeframe: '',
  estimatedVolume: '',
  preferredDemoTime: '',
  messageHtml: '',
};

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#E9D7E0] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] leading-none text-[#9F1D55]">
      <span className="relative top-px block h-2 w-2 shrink-0 rounded-full bg-[#C11D63]" />
      {children}
    </div>
  );
}

function ErrorText({ message }) {
  if (!message) return null;
  return <p className="mt-2 text-[13px] leading-5 text-[#B42318]">{message}</p>;
}

function TextInput({
  icon: Icon,
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  type = 'text',
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[14px] font-semibold text-[#344054]"
      >
        {label}
      </label>
      <div
        className={`flex items-center gap-3 rounded-[16px] border bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition ${
          error
            ? 'border-[#FDA29B] ring-2 ring-[#FEE4E2]'
            : 'border-[#E5E7EB] focus-within:border-[#C11D63] focus-within:ring-2 focus-within:ring-[#F7D9E7]'
        }`}
      >
        {Icon ? <Icon className="h-4 w-4 shrink-0 text-[#98A2B3]" /> : null}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder}
          className="w-full border-0 bg-transparent p-0 text-[15px] text-[#101828] placeholder:text-[#98A2B3] focus:outline-none"
        />
      </div>
      <ErrorText message={error} />
    </div>
  );
}

function SelectInput({
  label,
  name,
  value,
  options,
  placeholder,
  error,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[14px] font-semibold text-[#344054]"
      >
        {label}
      </label>
      <div
        className={`rounded-[16px] border bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition ${
          error
            ? 'border-[#FDA29B] ring-2 ring-[#FEE4E2]'
            : 'border-[#E5E7EB] focus-within:border-[#C11D63] focus-within:ring-2 focus-within:ring-[#F7D9E7]'
        }`}
      >
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={`w-full border-0 bg-transparent p-0 text-[15px] focus:outline-none ${
            value ? 'text-[#101828]' : 'text-[#98A2B3]'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <ErrorText message={error} />
    </div>
  );
}

function SelectChip({ selected, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-[16px] border px-4 py-3 text-left text-[14px] font-medium transition ${
        selected
          ? 'border-[#E8B7CC] bg-[#FDF7FA] text-[#7A1542]'
          : 'border-[#E5E7EB] bg-white text-[#475467] hover:border-[#D8DCE3]'
      }`}
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border ${
          selected
            ? 'border-[#C11D63] bg-[#C11D63]'
            : 'border-[#D0D5DD] bg-white'
        }`}
      >
        {selected ? (
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        ) : null}
      </span>
      <span className="leading-[1.35]">{label}</span>
    </button>
  );
}

function getPlainTextFromHtml(html) {
  if (typeof document === 'undefined') return html;
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return (temp.textContent || '').trim();
}

export default function StepesDemoRequestWireframe() {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedRequest, setSubmittedRequest] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const editorRef = useRef(null);

  const plainMessage = useMemo(
    () => getPlainTextFromHtml(formData.messageHtml),
    [formData.messageHtml]
  );

  const isFormValid = useMemo(() => {
    return Boolean(
      formData.workEmail.trim() &&
        formData.name.trim() &&
        formData.company.trim() &&
        formData.jobTitle.trim() &&
        formData.topics.length > 0 &&
        formData.contentType.length > 0 &&
        formData.preferredTimeframe.trim() &&
        plainMessage.trim()
    );
  }, [formData, plainMessage]);

  useEffect(() => {
    if (
      editorRef.current &&
      editorRef.current.innerHTML !== formData.messageHtml
    ) {
      editorRef.current.innerHTML = formData.messageHtml;
    }
  }, [formData.messageHtml]);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setIsSubmitted(false);
  };

  const handleEditorInput = () => {
    const nextHtml = editorRef.current?.innerHTML || '';
    handleInputChange('messageHtml', nextHtml);
  };

  const formatEditor = (command) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false);
    handleEditorInput();
  };

  const clearFormatting = () => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand('removeFormat', false);
    document.execCommand('unlink', false);
    handleEditorInput();
  };

  const toggleTopic = (topic) => {
    setFormData((prev) => {
      const exists = prev.topics.includes(topic);
      return {
        ...prev,
        topics: exists
          ? prev.topics.filter((item) => item !== topic)
          : [...prev.topics, topic],
      };
    });
    setErrors((prev) => ({ ...prev, topics: undefined }));
    setIsSubmitted(false);
  };

  const toggleContentType = (item) => {
    setFormData((prev) => {
      const exists = prev.contentType.includes(item);
      return {
        ...prev,
        contentType: exists
          ? prev.contentType.filter((type) => type !== item)
          : [...prev.contentType, item],
      };
    });
    setErrors((prev) => ({ ...prev, contentType: undefined }));
    setIsSubmitted(false);
  };

  const hasValidEmail = (value) => {
    const trimmed = value.trim();
    const atIndex = trimmed.indexOf('@');
    const dotIndex = trimmed.lastIndexOf('.');
    return (
      atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < trimmed.length - 1
    );
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.workEmail.trim())
      nextErrors.workEmail = 'Please enter your work email.';
    else if (!hasValidEmail(formData.workEmail))
      nextErrors.workEmail = 'Please enter a valid email address.';

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.company.trim())
      nextErrors.company = 'Please enter your company name.';
    if (!formData.jobTitle.trim())
      nextErrors.jobTitle = 'Please enter your job title.';
    if (formData.topics.length === 0)
      nextErrors.topics = 'Please select at least one demo topic.';
    if (formData.contentType.length === 0)
      nextErrors.contentType = 'Please select at least one content type.';
    if (!formData.preferredTimeframe.trim())
      nextErrors.preferredTimeframe =
        'Please select a preferred demo timeframe.';
    if (!plainMessage.trim())
      nextErrors.messageHtml =
        'Please share a little about your workflow or goals.';

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm();
    setSubmitCount((count) => count + 1);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setSubmittedRequest({ ...formData });
    setErrors({});
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmittedRequest(null);
    setErrors({});
    setIsSubmitted(false);
    setSubmitCount(0);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <div className="absolute inset-x-0 top-0 -z-0 h-[220px] bg-[radial-gradient(circle_at_top,rgba(193,29,99,0.05),transparent_44%)]" />

      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-8 lg:px-12 lg:py-12">
        <section className="py-4 lg:py-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-[920px] text-center"
          >
            <Eyebrow>Request a Platform Demo</Eyebrow>

            <h1 className="mt-6 text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#0F172A] sm:text-[44px] lg:text-[48px]">
              See the Stepes AI Translation Platform in Action
            </h1>

            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-7 text-[#475467] sm:text-[18px] sm:leading-8">
              Complete the form below to request a tailored walkthrough of
              Stepes for enterprise translation, AI + human workflows, quality,
              security, and scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mx-auto mt-8 max-w-[1200px] rounded-[28px] border border-[#EBECF0] bg-white p-4 shadow-[0_12px_40px_rgba(18,22,33,0.05)] sm:p-6 lg:p-7"
          >
            <div className="flex flex-col gap-3 border-b border-[#ECECF2] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[24px] font-semibold tracking-[-0.035em] text-[#0F172A] sm:text-[28px]">
                  {isSubmitted ? 'Demo Request Submitted' : 'Request Your Demo'}
                </h2>
                <p className="mt-2 max-w-[640px] text-[15px] leading-7 text-[#667085]">
                  {isSubmitted
                    ? 'Thanks. Your request has been received and the next steps are clearly outlined below.'
                    : 'Share a few details so we can prepare a focused platform walkthrough for your team.'}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E7D2DC] bg-[#FDF2F7] px-3 py-1 text-[12px] font-semibold text-[#9F1D55]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Typical response time: 1 business day
              </div>
            </div>

            {isSubmitted && submittedRequest ? (
              <div className="mt-8">
                <div className="rounded-[28px] border border-[#CDEFD9] bg-[#F6FEF9] p-6 sm:p-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(18,22,33,0.08)]">
                    <CheckCircle2 className="h-8 w-8 text-[#039855]" />
                  </div>

                  <div className="mx-auto mt-5 max-w-[760px] text-center">
                    <h3 className="text-[26px] font-semibold tracking-[-0.04em] text-[#0F172A] sm:text-[34px]">
                      Thank you. Your demo request has been submitted.
                    </h3>
                    <p className="mt-4 text-[16px] leading-7 text-[#475467]">
                      A Stepes specialist will review your request and follow up
                      to confirm fit and timing. We typically respond within 1
                      business day.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[22px] border border-[#DCEEE4] bg-white p-5">
                      <div className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#027A48]">
                        Request Summary
                      </div>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                            Name
                          </div>
                          <div className="mt-1 text-[15px] text-[#101828]">
                            {submittedRequest.name}
                          </div>
                        </div>
                        <div>
                          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                            Company
                          </div>
                          <div className="mt-1 text-[15px] text-[#101828]">
                            {submittedRequest.company}
                          </div>
                        </div>
                        <div>
                          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                            Work Email
                          </div>
                          <div className="mt-1 text-[15px] text-[#101828]">
                            {submittedRequest.workEmail}
                          </div>
                        </div>
                        <div>
                          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                            Timeframe
                          </div>
                          <div className="mt-1 text-[15px] text-[#101828]">
                            {submittedRequest.preferredTimeframe}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                          Requested Topics
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {submittedRequest.topics.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#DCEEE4] bg-[#F6FEF9] px-3 py-1.5 text-[13px] font-medium text-[#027A48]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                          Content Types
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {submittedRequest.contentType.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[#E5E7EB] bg-[#FCFCFD] px-3 py-1.5 text-[13px] font-medium text-[#475467]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-[#DCEEE4] bg-white p-5">
                      <div className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#027A48]">
                        What Happens Next
                      </div>
                      <div className="mt-4 space-y-4">
                        {nextSteps.map((step, index) => (
                          <div key={step.title} className="flex gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ECFDF3] text-[12px] font-semibold text-[#027A48]">
                              {index + 1}
                            </div>
                            <div>
                              <div className="text-[15px] font-semibold text-[#101828]">
                                {step.title}
                              </div>
                              <div className="mt-1 text-[14px] leading-6 text-[#667085]">
                                {step.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-[#D0D5DD] bg-white px-5 py-2.5 text-[15px] font-semibold text-[#344054] transition hover:border-[#C11D63] hover:text-[#C11D63] sm:w-auto"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextInput
                    icon={Mail}
                    label="Work Email"
                    name="workEmail"
                    value={formData.workEmail}
                    placeholder="name@company.com"
                    error={errors.workEmail}
                    onChange={handleInputChange}
                    type="email"
                  />
                  <TextInput
                    icon={User}
                    label="Name"
                    name="name"
                    value={formData.name}
                    placeholder="Your full name"
                    error={errors.name}
                    onChange={handleInputChange}
                  />
                  <TextInput
                    icon={Building}
                    label="Company"
                    name="company"
                    value={formData.company}
                    placeholder="Company name"
                    error={errors.company}
                    onChange={handleInputChange}
                  />
                  <TextInput
                    icon={ClipboardList}
                    label="Job Title"
                    name="jobTitle"
                    value={formData.jobTitle}
                    placeholder="Your role"
                    error={errors.jobTitle}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-6">
                  <label className="mb-3 block text-[14px] font-semibold text-[#344054]">
                    What would you like to see?
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {demoCheckboxes.map((item) => (
                      <SelectChip
                        key={item}
                        selected={formData.topics.includes(item)}
                        label={item}
                        onClick={() => toggleTopic(item)}
                      />
                    ))}
                  </div>
                  <ErrorText message={errors.topics} />
                </div>

                <div className="mt-6">
                  <label className="mb-3 block text-[14px] font-semibold text-[#344054]">
                    Content Type
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {contentTypes.map((item) => (
                      <SelectChip
                        key={item}
                        selected={formData.contentType.includes(item)}
                        label={item}
                        onClick={() => toggleContentType(item)}
                      />
                    ))}
                  </div>
                  <ErrorText message={errors.contentType} />
                </div>

                <div className="mt-6 max-w-[560px]">
                  <SelectInput
                    label="Preferred Demo Timeframe"
                    name="preferredTimeframe"
                    value={formData.preferredTimeframe}
                    options={timeframeOptions}
                    placeholder="Select timeframe"
                    error={errors.preferredTimeframe}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-6 rounded-[20px] border border-dashed border-[#E6E7EC] bg-[#FCFCFD] p-4 sm:p-5">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
                    Additional Details (Optional)
                  </div>
                  <div className="mt-4 grid gap-5 sm:grid-cols-2">
                    <TextInput
                      label="Estimated Translation Volume"
                      name="estimatedVolume"
                      value={formData.estimatedVolume}
                      placeholder="For example: 50,000 words per quarter"
                      onChange={handleInputChange}
                    />
                    <SelectInput
                      label="Preferred Demo Time"
                      name="preferredDemoTime"
                      value={formData.preferredDemoTime}
                      options={demoTimeOptions}
                      placeholder="Select a preferred time"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-[14px] font-semibold text-[#344054]">
                    Message / Current Translation Challenge
                  </label>
                  <div
                    className={`rounded-[16px] border bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition ${
                      errors.messageHtml
                        ? 'border-[#FDA29B] ring-2 ring-[#FEE4E2]'
                        : 'border-[#E5E7EB] focus-within:border-[#C11D63] focus-within:ring-2 focus-within:ring-[#F7D9E7]'
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <div
                        ref={editorRef}
                        contentEditable
                        suppressContentEditableWarning
                        onInput={handleEditorInput}
                        className="min-h-[180px] text-[15px] leading-7 text-[#101828] outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <ErrorText message={errors.messageHtml} />
                  </div>
                </div>

                <div className="mt-6 rounded-[20px] border border-[#ECECF2] bg-[#FCFCFD] p-4 sm:p-5">
                  <div className="text-[18px] font-semibold tracking-[-0.02em] text-[#101828]">
                    Built for enterprise translation programs
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {trustSignals.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-[14px] bg-white px-3 py-3 ring-1 ring-[#ECECF2]"
                      >
                        <div className="h-2 w-2 shrink-0 rounded-full bg-[#C11D63]" />
                        <div className="text-[14px] leading-[1.45] text-[#475467]">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-[#ECECF2] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-[480px] lg:max-w-[440px]">
                    <p className="text-[14px] leading-6 text-[#667085]">
                      A Stepes specialist will review your request and follow up
                      to schedule a tailored platform walkthrough for your team.
                    </p>
                    {submitCount > 0 && !isFormValid ? (
                      <p className="mt-2 text-[14px] font-medium leading-6 text-[#B42318]">
                        Please complete the required fields highlighted above.
                      </p>
                    ) : null}
                  </div>
                  <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-[#D7D9E0] bg-white px-5 py-2.5 text-[15px] font-semibold text-[#344054] transition hover:border-[#C11D63] hover:text-[#C11D63] sm:w-auto"
                    >
                      Reset Form
                    </button>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-[#C11D63] px-6 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#A71954] sm:w-auto"
                    >
                      Submit Demo Request
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </section>

        {!isSubmitted ? (
          <>
            <section className="border-t border-[#ECECF2] py-14 lg:py-16">
              <div className="mx-auto max-w-[1200px]">
                <div className="mx-auto max-w-[980px] text-center">
                  <Eyebrow>What Happens After You Submit?</Eyebrow>
                  <h2 className="mt-5 text-[32px] font-semibold tracking-[-0.04em] text-[#0F172A] sm:text-[38px] lg:text-[40px]">
                    A clear, organized process from request to walkthrough
                  </h2>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-4">
                  {nextSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="rounded-[22px] border border-[#E7E7EC] bg-[#FCFCFD] p-5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDF2F7] text-[14px] font-semibold text-[#C11D63]">
                        {index + 1}
                      </div>
                      <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-[#667085]">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            <section className="border-t border-[#ECECF2] py-14 lg:py-16">
              <div className="mx-auto max-w-[1200px]">
                <div className="mx-auto max-w-[980px] text-center">
                  <Eyebrow>Tailored for Your Team</Eyebrow>
                  <h2 className="mt-5 text-[32px] font-semibold tracking-[-0.04em] text-[#0F172A] sm:text-[38px] lg:text-[40px]">
                    We can tailor the demo around the teams and workflows most
                    relevant to your organization
                  </h2>
                </div>

                <div className="mt-10 grid gap-x-10 gap-y-2 lg:grid-cols-3">
                  {teams.map(({ title, description, icon: Icon }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="flex gap-4 border-b border-[#E7E7EC] py-6"
                    >
                      <div className="mt-0.5 rounded-[16px] bg-[#FDF2F7] p-3">
                        <Icon className="h-5 w-5 text-[#C11D63]" />
                      </div>
                      <div>
                        <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#101828]">
                          {title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-7 text-[#667085]">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="py-12 lg:py-14">
            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-[15px] leading-7 text-[#667085]">
                Need to share anything else before the session? Your Stepes
                contact can help refine the agenda, confirm timing, and prepare
                the most relevant walkthrough for your team.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
