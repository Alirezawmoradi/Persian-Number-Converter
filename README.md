# usePersianNumber

A custom hook for converting numbers into their Persian format.

---

## Overview

The `usePersianNumber` hook is designed to simplify the process of formatting numeric values into Persian (Farsi) numbers.

## Installation

You can install the `usePersianNumber` hook via npm :

```bash
npm install use-persian-number
```

## Usage

### Import

Import the `{ usePersianNumber }` hook into your component:

```jsx
import { usePersianNumber } from "persian-number-converter";
```
```jsx
const Example = 123;
const PersianNumber = usePersianNumber(Example)
```
## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## تبدیل اعداد به فرمت فارسی

---

شاید براتون پیش اومده باشه که بخواید اعداد برنامه خودتون رو به شکل فارسی نمایش بدید
این هوک برای ساده‌تر کردن فرمت‌ بندی مقادیر عددی به اعداد فارسی طراحی شده

### چطور ازش استفاده کنم؟
فقط کافیه به شکل زیر عمل کنی

```jsx
import { usePersianNumber } from "persian-number-converter";
```
```jsx
const Example = 123;
const PersianNumber = usePersianNumber(Example)
```
