import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg p-8"
        >
          <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
            Terms and Conditions – BULK MS
          </h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Last Updated: [Insert Date]
          </p>

          <div className="prose lg:prose-xl">
            <p>
              Welcome to BULK MS. By using our services through the mobile app, website (https://www.fast2sms.com), or affiliates, you agree to the following Terms and Conditions. Please read them carefully before proceeding.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using BULK MS, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use the app or our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              2. Data Collection and Use
            </h2>
            <p>
              We collect both anonymous and personally identifiable information to provide and improve our services:
            </p>
            <ul className="list-disc pl-6">
              <li>Automatically Collected Information: Your IP address and domain server, Device type and operating system, Browser type, Cookies and usage logs</li>
              <li>Personally Identifiable Information: Name, Email address, Mobile number, Billing and demographic details</li>
            </ul>
            <p>
              We use this data to: Provide and personalize services, Send order info, reminders, promotional content, Inform you of changes in services or terms
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              3. Use of Contact List and Files
            </h2>
            <p>
              With your permission, BULK MS accesses your contact list and storage files to: Send SMS messages to selected contacts, Allow bulk SMS operations. We do not share or misuse your contact data. Upon app uninstallation or account deletion, your stored contact data is promptly removed.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              4. Third-Party Sharing
            </h2>
            <p>
              We do not sell or rent your personal information. However, we may share data: With trusted partners and service providers, When required by Indian or international law enforcement, court orders, or government regulations, To prevent fraud, abuse, or security threats
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              5. Data Retention and Deletion
            </h2>
            <p>
              We retain user data only as long as necessary to fulfill service requirements or legal obligations. After uninstallation or removal from Play Store, user contacts and sensitive data are deleted from our servers.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              6. Security
            </h2>
            <p>
              BULK MS uses standard security practices to protect your data during transmission and storage. However, no method is 100% secure. Your account is password protected, and we encourage strong passwords and safe practices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
