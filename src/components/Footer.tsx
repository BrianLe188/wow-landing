import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-travel-ocean bg-clip-text text-transparent">
                Wow
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ứng dụng du lịch thông minh giúp bạn khám phá thế giới với những
              trải nghiệm tuyệt vời nhất.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">
              Sản phẩm
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tính năng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bản đồ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tối ưu tuyến đường
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hệ thống thưởng
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Hỗ trợ</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:vietanhle188.dev@gmail.com"
                  className="hover:underline"
                >
                  vietanhle188.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+84828030359" className="hover:underline">
                  +84 828030359
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Thanh Khê, Đà Nẵng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Wow. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
