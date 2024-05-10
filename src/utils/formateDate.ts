export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  // Format day, month, and year individually
  const dayFormatter = new Intl.DateTimeFormat('en-US', { day: '2-digit' });
  const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
  const yearFormatter = new Intl.DateTimeFormat('en-US', { year: 'numeric' });

  // Build the formatted date string with a comma after the month
  const formattedDate = `${dayFormatter.format(date)} ${monthFormatter.format(date)}, ${yearFormatter.format(date)}`;

  return formattedDate;
};
