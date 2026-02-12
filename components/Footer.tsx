'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">
            <strong className="text-gray-900">SEBI REGISTRATION DETAILS</strong>
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Upsparks Capital Fund (&ldquo;Fund&rdquo;) is registered with SEBI as a Category II Alternative Investment Fund. 
            Founder Capital Advisors LLP is the Investment Manager.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Our address: 522, Corporate Center, Nirmal Lifestyles, LBS Marg, Mulund West, Mumbai - 400080
          </p>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} UPSPARKS CAPITAL. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
